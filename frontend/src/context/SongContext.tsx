import { createContext, useContext, ReactNode, useState } from "react";

type SongContext = {
    songList: string[];
    changeSongList: (s: string[]) => void;
}

interface SongProviderProps {
    children: ReactNode;
    // other props
  }

export const SongContext= createContext<SongContext>({
    songList: [],
    changeSongList: () => {}
  });

export const SongProvider: React.FC<SongProviderProps> = ({ children }) => {
    const [songList, setSongList] = useState<string[]>([]);
  
    const changeSongList = (songList: string[]) => {
            setSongList(songList);
    }


    return (
        <SongContext.Provider value={{ songList, changeSongList }}>
          {children}
        </SongContext.Provider>
      );

}

export const useSongContext = () => useContext(SongContext);

/*

import { useSongContext } from "./context/SongContext";

export const SongContext= createContext({
  songList: [],
  toggleColorMode: true,
  setColorMode: () => {},
});

*/