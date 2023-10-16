import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  useHistory();
  const history = useHistory();

  function AddMeetuphandler(meetupData) {
    fetch(
      "https://react-getting-started-c07da-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={AddMeetuphandler} />
    </section>
  );
}

export default NewMeetupPage;
