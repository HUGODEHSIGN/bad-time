'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { useGetPlayers } from '@/app/hooks/useGetPlayers'
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import PlayerListComboBox from './PlayerListComboBox';

export default function PlayerListCard() {
  const { players } = useGetPlayers();

  function renderPlayers () {
    return players.map((player) => (
      <div key={player.uid}>{player.username}</div>
    ))
  }

  return (
    <>
    <Card>
        <CardHeader>
            <CardTitle>Players</CardTitle>
            <CardDescription>A list of all players at this gym</CardDescription>
        </CardHeader>
        <CardContent><PlayerListComboBox /></CardContent>
    </Card>
    </>
  )
}
