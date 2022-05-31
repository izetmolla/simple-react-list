import { useState } from "react";
function App() {
  const [content] = useState([
    { photoSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80', name: 'User 1', comment: 'test comment', time: "today at 3" },
    { photoSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80', name: 'User 2', comment: 'test comment', time: "today at 4" },
    { photoSrc: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80', name: 'User 3', comment: 'test comment', time: "today at 5" }
  ])

  return (
    <div style={{ flex: 1, width: "100%" }}>
      <div style={{ alignContent: "center", alignItems: "center", justifyContent: "center" }}>
        {content.map((item, i) => {
          return (
            <div key={i} style={{
              alignSelf: "center",
              margin: 20,
              maxWidth: 400,
              borderRadius: 10,
              flexDirection: "row", border: 1, border: '1px solid black'
            }}>
              <div style={{ display: "flex", flexDirection: "row", padding: 10, }}>
                <img src={item.photoSrc} style={{ widht: 40, height: 40 }} />
                <div style={{ paddingLeft: 10 }}>
                  <div style={{ paddingBottom: 5 }}>
                    <b style={{ paddingRight: 5 }}>{item.name}</b>
                    <span style={{ fontSize: 13 }}>Today at 3</span>
                  </div>
                  <span style={{}}>{item.comment}</span>
                </div>
              </div>
              <hr />
              <div style={{ display: 'flex', justifyContent: "center", padding: 10 }}>
                <button>Approve</button>
                <button>Reject</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  );
}

export default App;
