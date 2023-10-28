import { aiRequest } from '@/functions/gptFunctions'
import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        const errors: any = []
        let returnErrors = {}
        const res = await aiRequest(body.description)
        if (!res)
            return new NextResponse('Something went wrong', { status: 500 })
        const data = JSON.parse(res)
        Object.keys(data).forEach((key) => {
            console.log(data[key], typeof data[key])
        })
        Object.keys(body).forEach((key) => {
            if (!data[key]) return
            if (typeof data[key] === 'boolean') {
                if (data[key] !== body[key]) errors.push(key)
            }
            if (typeof data[key] === 'string') {
                if (data[key].toLowerCase() !== body[key].toLowerCase())
                    errors.push(key)
            }
            if (typeof data[key] === 'number') {
                if (data[key] !== parseInt(body[key])) errors.push(key)
            }
        })
        if (errors.length === 0) return new NextResponse('OK', { status: 200 })
        errors.forEach((error: string) => {
            returnErrors = { ...returnErrors, [error]: 'Incorrect data' }
        })
        return new NextResponse(JSON.stringify(returnErrors), { status: 200 })
    } catch {
        return new NextResponse('Something went wrong', { status: 500 })
    }
}
