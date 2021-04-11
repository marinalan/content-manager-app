import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "", 
  link: "",
  priority: "2",
  timeToFinish: 60,
  createdAt: "",
  status: "inactive"
};

const ResourceForm = ({onFormSubmit, initialData, subtitle}) => {
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const resetForm = () => setForm(DEFAULT_DATA);

  const handleChange = (e) => {
    const {name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const submitForm = () => {
    onFormSubmit(form);
  }

  return (
    <div className="resource-form">
      <h1 className="title">{ subtitle }</h1>
      <form>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              onChange={handleChange}
              name="title"
              value={form.title} 
              className="input" 
              type="text" 
              placeholder="Learn Next JS and Sanity IO"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea 
              onChange={handleChange}
              value={form.description}
              name="description"
              className="textarea" 
              placeholder="Learn these technologies because they are very popular and enable better SEO"
            ></textarea>
          </div>
        </div>
        <div className="field">
          <label className="label">Link</label>
          <div className="control">
            <input 
              onChange={handleChange}
              value={form.link}
              name="link"
              className="input" 
              type="text" 
              placeholder="https://academy.eincode.com"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Priority</label>
          <div className="control">
            <div className="select">
              <select 
                value={form.priority}
                onChange={handleChange}
                name="priority"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Time to finish</label>
          <div className="control">
            <input 
              onChange={handleChange}
              value={form.timeToFinish}
              name="timeToFinish"
              className="input" 
              type="number" 
              placeholder="60"
            />
          </div>
          <p className="help">(time is in minutes)</p>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button 
              type="button"
              onClick={submitForm}
              className="button is-link">Submit</button>
          </div>
          <div className="control">
            <button 
              type="button"
              onClick={resetForm}
              className="button is-link is-light">Reset Form</button>
          </div>
        </div>
      </form>
    </div>

  );
}

export default ResourceForm;