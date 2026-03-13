import express from 'express'
import cors from 'cors'
import con from './db.js'
import dotenv from 'dotenv'

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config()

//Login
app.post('/login', async (req, res) => {
    const { nome, senha } = req.body
    try {
        const [linha] = await con.query(
            'SELECT * FROM usuarios WHERE nome = ?',
            [nome]
        )
        if (linha.length > 0) {
            if (linha[0].senha == senha) {
                res.json({
                    sucess: true,
                    usuario: { id: linha[0].id, nome: linha[0].nome, permissao: linha[0].permissao }
                })
            } else {
                res.status(401).json({
                     sucess: false, error: 'Senha inválida!' 
                })
            }
        } else {
            res.status(401).json({
                sucess:false,error:'Usuário não encontrado!'
            })
        }
    } catch {
        res.status(500).json({error: 'Agora deu krai memo'})
    }
})

app.listen(process.env.PORTA,()=> console.log(`Iniciei o Server na Porta => ${process.env.PORTA}`))