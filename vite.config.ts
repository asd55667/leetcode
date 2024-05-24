// vite.config.ts
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { parse, type FunctionDeclaration } from 'acorn'

export default defineConfig({
    plugins: [
        {
            name: 'transform:test',
            transform(code) {
                let name = ''
                const examples: string[] = []
                let argc = 1
                const answers: string[] = []
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
                            }
                        })
                    }
                })

                if (name && examples.length === answers.length) {
                    code += `
if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest

    it('${name}', () => {
        ${examples.map((_, i) =>
                        `expect(${name}(${argc > 1 ? '...' : ''}${examples[i]})).toStrictEqual(${answers[i]});`
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