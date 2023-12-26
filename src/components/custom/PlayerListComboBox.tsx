'use client'

import React, { useState } from 'react'
import { useMediaQuery} from '@uidotdev/usehooks'

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useGetPlayers } from '@/app/hooks/useGetPlayers'

export default function PlayerListComboBox() {
    const [open, setOpen] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const { players } = useGetPlayers();


    if (isDesktop) {
        return (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[150px] justify-start">
                + Add Player
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0" align="start">
              <StatusList setOpen={setOpen} />
            </PopoverContent>
          </Popover>
        )
      }
    
      return (
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="w-[150px] justify-start">
              + Add Player
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mt-4 border-t">
              <StatusList setOpen={setOpen} />
            </div>
          </DrawerContent>
        </Drawer>
      )


      function StatusList({
        setOpen,
     
      }: {
        setOpen: (open: boolean) => void
     
      }) {
        return (
          <Command>
            <CommandInput placeholder="Filter status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {players.map((player) => (
                  <CommandItem
                    key={player.uid}
                    value={player.username}
                    onSelect={(value) => {
                        console.log(value)
                      }}>
             
          {player.username}
               
                  
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        )
      }
    }

