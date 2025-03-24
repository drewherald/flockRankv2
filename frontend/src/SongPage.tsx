import React, { useEffect, useState } from "react";
import { Types } from 'mongoose';
import SongCard from "../components/SongCard";
import { useParams } from "react-router-dom";
import FormPopup from "../components/FormPopup";
import { Box, Typography } from "@mui/material";
import "../assets/styles/pages/songPage.css";

export default function SongPage() {
  const [songs, setSongs] = useState<Song[]>([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  

  type Song = {
        _id: Types.ObjectId;
        title: string;
        date: string;
        venue: string;
        city: string;
        state: string;
        comment: string;
        upvotes: [number];
        id: string;
        externalComments: [string];
        userName: string;
  };

  useEffect(() => {
    const fetchSongs = async () => {
      const response = await fetch("https://flockrank.onrender.com/api/songs");
      const json = await response.json();
      console.log(json);

      if (response.ok) {
        const songFilter = [];
        for (let i = 0; i < json.length; i++) {
          if (json[i].title === id) {
            songFilter.push(json[i]);
          }
        }
        if (songFilter.length > 0) {
          songFilter.sort((a, b) => a.upvotes.length - b.upvotes.length);
          songFilter.reverse();
          setSongs(songFilter);
        }
      }
      setLoading(false);
    };

    fetchSongs();
  }, [id]);

  return (
    <>
      <div
        className="songs"
        style={{
          backgroundColor: "#008080",
          paddingBottom: "50svh",
          minHeight: "80svh",
        }}
      >
        {songs && !loading && (
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
            <Box></Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "50px 0",
              }}
            >
              <Typography
                variant="h4"
                sx={{ padding: "10px 0 20px 0" }}
                className="songPageText"
              >
                {id} Best Versions{" "}
              </Typography>
              {songs &&
                !loading &&
                songs.map((song) => (
                  <SongCard
                    key={song._id}
                    title={song.title}
                    date={song.date}
                    venue={song.venue}
                    city={song.city}
                    state={song.state}
                    comment={song.comment}
                    upvotes={song.upvotes}
                    id={song._id}
                    externalComments={song.externalComments}
                    userName={song.userName}
                  />
                ))}
            </Box>
            <Box></Box>
          </Box>
        )}

        {!songs && !loading && (
          <React.Fragment>
            <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
              <Box></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "50px 0",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ padding: "10px 0 30px 0" }}
                  className="songPageText"
                >
                  Oh no! No versions of {id} have been submitted.{" "}
                </Typography>
                <FormPopup flavorText={"Start the conversation"} />
              </Box>
              <Box></Box>
            </Box>
          </React.Fragment>
        )}
      </div>
    </>
  );
}
