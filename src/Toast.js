export default function Toast({ setShow }) {
  return (
    <div>
      <p>So, there are new notifications . Check them here </p>
      <button id="hide" onClick={() => setShow(false)}>
        Hide
      </button>
    </div>
  );
}
