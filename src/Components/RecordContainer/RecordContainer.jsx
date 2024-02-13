import "./recordContainer.css";

export default function RecordContainer({ data }) {
  return (
    <ul>
      <li className="checked">record 1</li>
      <li className="unchecked">record 2</li>
      <li>record 3</li>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </ul>
  );
}
