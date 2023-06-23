const Home = () => {
  return (
    <div>
      <br />
      <br />
      <section
        className="container"
        style={{ maxWidth: "700px", alignItems: "center", textAlign: "center" }}
      >
        <h2>Welcome to Wildlife Zoo!</h2>
        <h6
          style={{
            fontSize: "0.5cm",
            fontStyle: "italic",
          }}
        >
          Wildlife Zoo, Aquarium & Safari Park has Arizona’s largest collection
          of exotic and endangered animals, with more than 600 separate species,
          rides, a petting zoo and daily shows!
        </h6>
      </section>
      <br />
      <hr style={{ width: "80%", margin: "0 auto" }} />
      <br />
      <br />
      <div className="container" style={{ alignItems: "center" }}>
        <h5>Safari Park </h5>
        <p>
          Get up close and personal with the fastest land mammal on earth – the
          cheetah! Take a train ride through our Safari Park for the ultimate
          experience!
        </p>
        <br />
        <h5>Aquarium </h5>
        <p>
          With over 80 exhibits the aquarium offers guests a glimpse into the
          wild underwater world of many aquatic animals including sharks, rays
          and more.
        </p>
        <br />
        <h5>Dragon World </h5>
        <p>
          You’ll be amazed! This exciting display of animal exhibits features
          giant ectotherms – reptiles that use their environments to control
          their body temperatures.
        </p>
        <br />
        <h5>Zoo </h5>
        <p>
          Our original but modernized areas of Wildlife World Zoo indoor and
          outdoor exhibits from around the world.
        </p>
        <br />
        <h5>Adventure Land </h5>
        <p>
          Meet amazing animals from North and South America like the tapirs,
          mountain lions, red fox, and many more.
        </p>
      </div>
    </div>
  );
};

export default Home;
