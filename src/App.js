import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <head></head>
      <body>
        <header class="header">
          <h1 class="heading">
            Dong hee & Hyun mi
            <span class="heading-subtext"> are getting married!</span>
          </h1>
        </header>
        <a data-scroll class="fixed-button" href="#rsvp" id="rsvpButton">
          RSVP
        </a>
        <section class="section">
          <h2 class="sub-heading">Overview</h2>
          <p> wedding Invitation </p>
        </section>
        <section class="section">
          <h2 class="sub-heading">The Details</h2>
          <div class="details">
            <i class="fas fa-calendar-check"></i>
            <h3 class="details-heading">When</h3>
            <p>January 1, 2020</p>
            <a
              title="Add to Calendar"
              rel="noopener"
              href="#"
              target="_blank"
              rel="nofollow"
            >
              Add to Calendar
            </a>
          </div>
          <div class="details">
            <i class="fas fa-map-marked-alt"></i>
            <h3 class="details-heading">Location</h3>
            <p>
              <a rel="noopener" href="#">
                Grand Venue Place
              </a>
              , City, State
            </p>
            <img class="resort-image" src="./img/resort.jpeg" alt="Resort" />
          </div>
        </section>
      </body>
    </div>
  );
}
