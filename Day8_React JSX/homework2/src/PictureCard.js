let today = new Date();

const people = [
  {
    img: "https://images.unsplash.com/photo-1652631631022-4c9ab6c22109",
    name: "photo 001",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 4,
    comment: 8,
  },
  {
    img: "https://images.unsplash.com/photo-1621695371436-2118f66371a7",
    name: "photo 002",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 22,
    comment: 5,
  },
  {
    img: "https://images.unsplash.com/photo-1652602400310-c948bdc46d88",
    name: "photo 003",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 6,
    comment: 7,
  },
  {
    img: "https://images.unsplash.com/photo-1652632666776-a33eacbdd33f",
    name: "photo 004",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 8,
    comment: 8,
  },
  {
    img: "https://images.unsplash.com/photo-1652602446872-5dd4961a05ae",
    name: "photo 005",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 10,
    comment: 5,
  },
  {
    img: "https://images.unsplash.com/photo-1652465485213-eb37cb92a34d",
    name: "photo 006",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 8,
    comment: 3,
  },
  {
    img: "https://images.unsplash.com/photo-1652521887861-5ec257b41e0a",
    name: "photo 007",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 4,
    comment: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1652633485407-ffc8351fbead",
    name: "photo 008",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 1,
    comment: 1,
  },
  {
    img: "https://images.unsplash.com/photo-1652615808419-f4e3e0f7519a",
    name: "photo 009",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 17,
    comment: 12,
  },
  {
    img: "https://images.unsplash.com/photo-1613952936212-7bd40f117443",
    name: "photo 010",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 6,
    comment: 10,
  },
  {
    img: "https://images.unsplash.com/photo-1652456480904-cc878416f41f",
    name: "photo 011",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 12,
    comment: 10,
  },
  {
    img: "https://images.unsplash.com/photo-1611548059011-36fdb04284ca",
    name: "photo 012",
    date:
      today.getDate() +
      "-" +
      parseInt(today.getMonth() + 1) +
      "-" +
      today.getFullYear(),
    like: 15,
    comment: 10,
  },
];


const lap = {
    display: "inline-block",
    width: "300px",
    margin: "50px",
    backgroundColor: "blue",
  };

const message = people.map((x, i) => {
  return (
    <div style={lap} key={`pictures${i}`}>
      <div style={{ padding: "10px" }}>
        <img style={{ maxWidth: "100%" }} src={x.img} alt={x.name} />
      </div>
      <div>
        <h3>{x.name}</h3>
        <h3>Date: {x.date}</h3>
        <h3>{x.like} likes</h3>
        <h3>{x.comment} comments</h3>
      </div>
    </div>
  );
});

const PictureCard = () => {
  return <div>{message}</div>;
};

export default PictureCard;
