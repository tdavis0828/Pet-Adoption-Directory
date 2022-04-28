import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Table = ({ pets }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults] = useState(pets);
  const [filterResults, setFilterResults] = useState(pets);
  const [sortedName, setSortedName] = useState("");
  const [sortedAge, setSortedAge] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [breed, setBreed] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [isDisabled, setIsdisabled] = useState(true);

  useEffect(() => {
    setFilterResults([
      ...searchResults.filter((pet) =>
        pet.name.toUpperCase().includes(searchTerm.toUpperCase())
      ),
      ...searchResults.filter((pet) =>
        pet.type.toUpperCase().includes(searchTerm.toUpperCase())
      ),
      ...searchResults.filter((pet) =>
        pet.location.toUpperCase().includes(searchTerm.toUpperCase())
      ),
    ]);
  });

  useEffect(() => {
    const formValidation = () => {
      if (name && type && breed && age && location) {
        setIsdisabled(false);
      } else {
        setIsdisabled(true);
      }
    };
    formValidation();
  });

  const handleForm = (e) => {
    e.preventDefault();
    const newInput = {
      name: name,
      type: type,
      breed: breed,
      age: age,
      location: location,
    };

    if (!name || !type || !breed || !age || !location) {
      console.log("missing info");
    } else {
      pets.push(newInput);
      setName("");
      setType("");
      setBreed("");
      setAge("");
      setLocation("");
    }
  };

  const sortNames = () => {
    if (sortedName === "AZ") {
      pets.sort(function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
      setSortedName("ZA");
    } else {
      pets.sort(function (a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        } else if (nameA < nameB) {
          return 1;
        } else {
          return 0;
        }
      });
      setSortedName("AZ");
    }
  };

  const sortAge = () => {
    if (sortedAge === "1-9") {
      pets.sort(function (a, b) {
        const nameA = a.age;
        const nameB = b.age;
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      });
      setSortedAge("9-1");
    } else {
      pets.sort(function (a, b) {
        const ageA = a.age;
        const ageB = b.age;
        if (ageA > ageB) {
          return -1;
        } else if (ageA < ageB) {
          return 1;
        } else {
          return 0;
        }
      });
      setSortedAge("1-9");
    }
  };

  return (
    <>
      <section className="form">
        <div className="form-header">
          <h2>To submit a new pet</h2>
          <p>Please fill out the information below.</p>
        </div>
        <form autoComplete="off" onSubmit={handleForm}>
          <label htmlFor="name">
            Name:
            <input
              className="input"
              type="text"
              name="name"
              id="name"
              placeholder="Max"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            {!name ? <small>What is the name of your pet?</small> : ""}
          </label>

          <label htmlFor="type">
            Type:
            <input
              className="input"
              type="text"
              name="type"
              id="type"
              placeholder="Cat"
              onChange={(e) => setType(e.target.value)}
              value={type}
              required
            />
            {!type && name ? (
              <small>Please tell us what kind of animal {name} is.</small>
            ) : (
              ""
            )}
          </label>

          <label htmlFor="breed">
            Breed:
            <input
              className="input"
              type="text"
              name="breed"
              id="breed"
              placeholder="Siamese"
              onChange={(e) => setBreed(e.target.value)}
              value={breed}
              required
            />
            {!breed && type ? (
              <small>
                What breed of {type} is {name}?
              </small>
            ) : (
              ""
            )}
          </label>

          <label htmlFor="age">
            Age:
            <input
              className="input"
              type="number"
              name="age"
              id="age"
              min="0"
              max="90"
              placeholder="2"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              required
            />
            {!age && breed ? <small>How old is {name}?</small> : ""}
          </label>

          <label htmlFor="location">
            Location:
            <input
              className="input"
              type="text"
              name="location"
              id="location"
              placeholder="Los Angeles, CA"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              required
            />
          </label>

          <button
            type="submit"
            id="submit"
            className={isDisabled ? "disabled" : ""}
          >
            Submit
          </button>
        </form>
      </section>

      <section>
        <input
          type="text"
          className="search"
          placeholder="Name, Type, or Location"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </section>

      <section className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>
                NAME
                <button className="sort-btn" onClick={() => sortNames()}>
                  <i className="fa-solid fa-sort"></i>

                  {sortedName === "AZ" ? (
                    <i className="fa-solid fa-arrow-down-z-a"></i>
                  ) : (
                    ""
                  )}
                  {sortedName === "ZA" ? (
                    <i className="fa-solid fa-arrow-up-a-z"></i>
                  ) : (
                    ""
                  )}
                </button>
              </th>
              <th>TYPE</th>
              <th>BREED</th>
              <th>
                AGE
                <button className="sort-btn" onClick={() => sortAge()}>
                  <i className="fa-solid fa-sort"></i>
                  {sortedAge === "1-9" ? (
                    <i class="fa-solid fa-arrow-up-9-1"></i>
                  ) : (
                    ""
                  )}
                  {sortedAge === "9-1" ? (
                    <i className="fa-solid fa-arrow-up-1-9"></i>
                  ) : (
                    ""
                  )}
                </button>
              </th>
              <th>LOCATION</th>
            </tr>
          </thead>
          <tbody>
            {!searchTerm
              ? searchResults.map((pet) => (
                  <tr key={nanoid()}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>{pet.breed}</td>
                    <td>{pet.age}</td>
                    <td>{pet.location}</td>
                  </tr>
                ))
              : filterResults.map((pet) => (
                  <tr key={nanoid()}>
                    <td>{pet.name}</td>
                    <td>{pet.type}</td>
                    <td>{pet.breed}</td>
                    <td>{pet.age}</td>
                    <td>{pet.location}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
