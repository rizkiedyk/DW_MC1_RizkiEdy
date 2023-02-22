import { useParams, Link } from "react-router-dom";

import detail from "../product/Product.json";

console.log(detail);
export default function Detail() {
  const params = useParams();
  const id = parseInt(params.id);
  console.log(id);
  return (
    <>
      <div
        style={{
          width: "90%",
          height: "300px",
          backgroundColor: "grey",
          margin: "50px auto",
        }}
      >
        <div
          style={{
            width: "30%",
            height: "100%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={detail[id].image}
            alt=""
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "100%",
              border: "5px solid red",
            }}
          />
          <p style={{ fontWeight: "bold", color: "white" }}>
            @{detail[id].username}
          </p>
          <div style={{ display: "flex", gap: "30px" }}>
            <div>
              <p style={{ textAlign: "center" }}>{detail[id].follower}</p>
              <p>Followers</p>
            </div>
            <div>
              <p style={{ textAlign: "center" }}>{detail[id].following}</p>
              <p>Following</p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </>
  );
}
