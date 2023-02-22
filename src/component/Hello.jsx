import { NavLink } from "react-router-dom";
import listProduct from "../product/Product.json";

export default function List() {
  return (
    <>
      {listProduct.map((data, index) => {
        return (
          <>
            <NavLink
              to={`/detail/${index}`}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#2b2d42",
                  marginTop: "30px",
                  color: "white",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={data.image}
                    alt=""
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div style={{ marginLeft: "30px" }}>
                  <h2>@{data.username}</h2>
                  <p>Followers : {data.follower}</p>
                </div>
              </div>
            </NavLink>
          </>
        );
      })}
    </>
  );
}
