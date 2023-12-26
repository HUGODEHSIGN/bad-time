import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

export default function InvitationCard() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Invitations</CardTitle>
            <CardDescription>View your invitations here</CardDescription>
            
            
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter>

                <Button variant='destructive'>Decline all</Button>

            </CardFooter>
    </Card>
  )
}
