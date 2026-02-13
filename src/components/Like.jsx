import React, { useState } from "react";

function Like() {
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <button onClick={() => setLiked(!liked)}>{liked ? "❤️" : "🤍"}</button>
    </div>
  );
}

export default Like;
