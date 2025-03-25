import { useState } from "react";
import { Box } from "@mui/system";
import { TextInput, Button } from "react95";
import { Types } from 'mongoose';


type SongformProps = {
    songId: Types.ObjectId;
    externalComments: string[][];
    onClose: () => void;
  }


export default function Songform({ songId, externalComments, onClose }: SongformProps) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false)



  //comment form submission handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)
    e.preventDefault();
    const newComments = externalComments;
    const userTest = localStorage.getItem("user");
    const user =  userTest !== null ? JSON.parse(userTest) : {userName: null};
    newComments.push([comment, user.userName]);
    const commentUpdate = { id: songId, externalComments: newComments };
    const token = user.token;
    const response = await fetch(
      `https://flockrank.onrender.com/api/songs/${songId}`,
      {
        method: "PATCH",
        body: JSON.stringify(commentUpdate),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
    );

    const commentJson = await response.json();

    if (!response.ok) {
      console.log(commentJson);
      setError(commentJson.error);
    }
    if (response.ok) {
      setComment("");
      setError(null);
      setSuccess("Your comment has been posted!");
      console.log("new comment added", commentJson);
    }

    setLoading(false)
  };

  return (
    <Box
      component="form"
      className="create"
      onSubmit={(e) => handleSubmit(e)}
      sx={{ display: "flex", flexDirection: "column", width: "40dvw" }}
    >
      <TextInput
        required
        label="Comments"
        multiline
        rows={4}
        placeholder="Add a new comment"
        variant="flat"
        value={comment}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value)}
        style={{ paddingBottom: "10px", marginTop:'10px', fontFamily: "ms_sans_serif" }}
      />
        <button
        className="closeButton"
        type="submit"
        onClick={() => onClose()}
        style={{ margin: "10px 0 10px 0", backgroundColor: "#c6c6c6" }}
      >
        X
      </button>
      {loading ? <div></div> :  <Button type="submit" style={{ margin: "10px 0" }}>
        Submit
      </Button>}
     
    
      {error && <div style={{ color: "red" }}>{error}</div>}
      {!error && <Box sx={{ color: "green" }}>{success}</Box>}
    </Box>
  );
}
