import react, { Component } from "react";

class CreateProject extends Component {

  submit(): void {
    console.log('submit');
  }

  render() {
    return (
      <form>
        <div>
          <label>Title</label>
          <input placeholder="title" />
        </div>
        <div>
          <label>Body</label>
          <textarea></textarea>
        </div>
        <div>
          <label>Logo: </label>
          <input type="file" />
        </div>
        <div>
          <button type="button" onClick={() => this.submit()}>Create</button>
        </div>
      </form>
    );
  }
}

export default CreateProject;