import { useParams } from 'react-router-dom';

export function User() {
  console.log("User");
  let { user } = useParams();
  return (
    <div>
      <h2>User: {user}</h2>
    </div>
  );
}