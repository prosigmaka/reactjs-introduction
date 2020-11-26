import React from 'react';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <form>
                <label>
                    Name:
                </label>
                <input
                    type="text"
                    placeholder="insert name"
                />
                <label>
                    Gender:
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        value="Male"
                        name="gender"
                    />
                    Male
                </label>
                <label className="radio">
                    <input
                        type="radio"
                        value="Female"
                        name="gender"
                    />
                    Female
                </label>

                <label>
                    Birthdate:
                </label>
                <input
                    type="date"
                />

                <label>
                    Address:
                </label>
                <textarea
                    rows="3"
                    placeholder="insert address"
                />

                <label>
                    Religion:
                </label>
                <select>
                    <option>Select one</option>
                    <option>Islam</option>
                    <option>Protestant</option>
                    <option>Catholic</option>
                    <option>Hindu</option>
                    <option>Buddha</option>
                    <option>Konghucu</option>
                </select>

                <input
                    type="submit"
                    value="Submit"
                />
            </form >
        );
    }
}

export default App;
