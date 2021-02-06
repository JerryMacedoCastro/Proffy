import React, { useState, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

import "./styles.css";

const TeachersList: React.FC = () => {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState("");
  // eslint-disable-next-line @typescript-eslint/camelcase
  const [week_day, setWeek_day] = useState(0);
  const [time, setTime] = useState("");

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async function searchTeachers(e: FormEvent) {
    e.preventDefault();
    const response = await api.get("classes", {
      params: {
        subject,
        // eslint-disable-next-line @typescript-eslint/camelcase
        week_day,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Those are the vailable teachers.">
        <form id="search-teachers" onSubmit={searchTeachers}>
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
          <Select
            name="week_day"
            label="Week day"
            // eslint-disable-next-line @typescript-eslint/camelcase
            value={week_day}
            onChange={(e) => {
              setWeek_day(Number(e.target.value));
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
            type="time"
            name="time"
            label="Time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Search</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
};

export default TeachersList;
