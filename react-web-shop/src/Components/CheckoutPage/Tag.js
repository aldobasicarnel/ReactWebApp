import "./Tag.css";

const Tag = (props) => {
  return (
    <div className="main-tag">
      <div className="tag">
        <h2 className="tag-content">{props.tag}</h2>
      </div>
    </div>
  );
};

export default Tag;
