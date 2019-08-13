/*
 * A simple React component
 */
class App extends React.Component {
constructor() {
        super()
        this.state = {
            firstName: "",
            lastName:"",
            email: "",
            age: "",
            phone:"",
            gender: "",
            textarea:"",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
        const {name,value, type, checked} = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }

    render() {
        return (

            <main>
              <form id="survey-form">
                <p className="App-header">
                  <h1><center> David Templeton Survey Form</center></h1>
                  </p>
					    <label id="name-label" htmlFor="male">
					    <input
						        id="firstName"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="FirstName"
                    />
                    <br/>
                <input
						        id="lastName"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="LastName"
                    />
					      </label>
                    <br />
              <label id="email-label" htmlFor="email">
              <input
						          type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="email"
                    />
					</label>
                    <br />


					<label id="number-label" htmlFor="Age">
                    <input
						className="input-field"
						max="125"
						min="1"
						id="number"
						type="number"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChange}
                        placeholder="Age"
                    />
					</label>
                    <br />


                    <br />

                    <select  id="dropdown"
                        value={this.state.destination}
                        name="destination"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Phone Type --</option>
                        <option value="Home">Home</option>
                        <option value="Work">Work</option>
                        <option value="Cell">Cell</option>

                    </select>
                    <br/>
                    <br/>
                    <input
						            className="input-field"
						            max="9999999999999999"
						            min="1"
						            id="phone"
						            type="number"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                        placeholder="Phone Number"
                    />

                    <br />
                    <br/>

					    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
					<br/>

                    <label>
                        <input
							value="1"
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                    </label>
                    <br />

                    <label>
                        <input
							value="2"
                            type="checkbox"
                            name="isKosher"
                            onChange={this.handleChange}
                            checked={this.state.isKosher}
                        /> Kosher?
                    </label>
                    <br />

                    <label>
                        <input
							value="3"
                            type="checkbox"
                            name="isLactoseFree"
                            onChange={this.handleChange}
                            checked={this.state.isLactoseFree}
                        /> Lactose Free?
                    </label>
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your number:{this.state.phone} </p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>Your dietary restrictions:</p>

                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>


				<textarea rows="4" cols="50" onChange={this.handleChange} name="textarea" value={this.state.textarea}>

				</textarea>
				<button onClick={()=>alert('Thank you for your time!')} id="submit" value="submit">Submit </button>
            </main>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
