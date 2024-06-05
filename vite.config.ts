// vite.config.ts
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { parse, } from 'acorn'
import type { FunctionDeclaration, ObjectExpression, Property, Identifier } from 'acorn'

export default defineConfig({
    plugins: [
        {
            name: 'transform:test',
            transform(code) {
                let name = ''
                const examples: string[] = []
                let argc = 1
                const answers: string[] = []
                const transform = { input: false, output: false }
                const ast = parse(code, { ecmaVersion: 'latest', sourceType: 'module' })

                ast.body.forEach(node => {
                    if (node.type === 'ExportDefaultDeclaration') {
                        const decl = node.declaration as FunctionDeclaration
                        if (decl?.type === 'FunctionDeclaration') {
                            name = decl.id.name
                            if (decl.params.length > 1) argc = 2
                        }
                    }

                    if (node.type === 'VariableDeclaration') {
                        node.declarations.forEach(node => {
                            const { id } = node
                            if (id.type === 'Identifier') {
                                if (id.name.startsWith('example')) examples.push(id.name)
                                if (id.name.startsWith('answer')) answers.push(id.name)

                                if (id.name.startsWith('transform')) {
                                    const props = (node.init as ObjectExpression).properties
                                    for (const prop of props) {
                                        const key = ((prop as Property).key as Identifier).name
                                        if (key === 'input') transform.input = true
                                        if (key === 'output') transform.output = true
                                        // if (key === 'handler') transform.handler = true
                                    }
                                }
                            }
                        })
                    }
                })
                const transformInput = transform.input ? (input) => `transform.input(${input})` : (input) => input
                const transformOutput = transform.output ? (output) => `transform.output(${output})` : (output) => output

                if (name && examples.length === answers.length) {
                    code += `
if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest

    it('${name}', () => {
        ${examples.map((_, i) =>
                        `expect(${name}(${argc > 1 ? '...' : ''}${transformInput(examples[i])})).toStrictEqual(${transformOutput(answers[i])});`
                    ).join('\n')
                        }
    })
}`
                }

                return code
            }
        }
    ],
    test: {
        includeSource: ['**/*.{js,ts}'],
        watch: true
    },
})