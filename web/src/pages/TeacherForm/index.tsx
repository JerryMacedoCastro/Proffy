import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Select from "../../components/Select";
import api from "../../services/api";

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");
  const [scheduleItems, setScheduleItems] = useState([
    {
      // eslint-disable-next-line @typescript-eslint/camelcase
      week_day: 0,
      from: "",
      to: "",
    },
  ]);

  function addNewScheduleItem(): void {
    setScheduleItems([
      ...scheduleItems,
      {
        // eslint-disable-next-line @typescript-eslint/camelcase
        week_day: 0,
        from: "",
        to: "",
      },
    ]);
  }

  function handleCreateClass(e: FormEvent): void {
    e.preventDefault();
    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        // eslint-disable-next-line no-alert
        alert("Success");
        history.push("/");
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert("Error");
      });
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ): void {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItems);
  }
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="How amazing you wanna give classes."
        description="The first step is fill in this form"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Personal Data</legend>

            <Input
              name="name"
              label="Complete Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Biografy"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>About the class</legend>
            <Select
              name="subject"
              label="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: "Arts", label: "Arts" },
                { value: "Portuguese", label: "Portuguese" },
                { value: "Maths", label: "Maths" },
                { value: "History", label: "History" },
                { value: "Cience", label: "Cience" },
              ]}
            />
            <Input
              name="cost"
              label="Class cost by hour "
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available schedule
              <button type="button" onClick={addNewScheduleItem}>
                + New Schedule
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Week day"
                    value={scheduleItem.week_day}
                    onChange={(e) => {
                      setScheduleItemValue(index, "week_day", e.target.value);
                    }}
                    options={[
                      { value: "0", label: "Sunday" },
                      { value: "1", label: "Monday" },
                      { value: "2", label: "Tuesday" },
                      { value: "3", label: "wednesday" },
                      { value: "4", label: "Thursday" },
                      { value: "5", label: "Friday" },
                      { value: "6", label: "Saturday" },
                    ]}
                  />
                  <Input
                    name="from"
                    label="From"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) => {
                      setScheduleItemValue(index, "from", e.target.value);
                    }}
                  />
                  <Input
                    name="to"
                    label="To"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) => {
                      setScheduleItemValue(index, "to", e.target.value);
                    }}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="warning icon" />
              Important <br />
              Every fields are needed!
            </p>
            <button type="submit">Save Candidate</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
