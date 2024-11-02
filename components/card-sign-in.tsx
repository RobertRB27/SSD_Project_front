import { login, signup } from '@/app/(auth)/sign-in/actions'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function CardSignIn() {
  return (
    <Card className='w-[350px]'>
        <CardHeader>
            <CardTitle>
                Bienvenid@
            </CardTitle>
            <CardDescription>
                Por favor ingresa tu usuario y contraseña.                
            </CardDescription>
        </CardHeader>
        <CardContent>
            <form>
                <div>
                    <Label htmlFor="email">Correo :</Label>
                    <Input id="email" name="email" type="email" required />
                </div>
                <div className='mt-3'>
                    <Label htmlFor="password">Contraseña :</Label>
                    <Input id="password" name="password" type="password" required />
                </div>
                <div  className='flex flex-row justify-center gap-4 mt-3'>
                    <Button formAction={login}>Log in</Button>
                    <Button className='bg-blue-900' formAction={signup}>Sign up</Button>
                </div>
            </form>
        </CardContent>
    </Card>
  )
}
