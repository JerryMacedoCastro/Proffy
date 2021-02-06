import React from "react";

import api from "../../services/api";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection(): void {
    // eslint-disable-next-line @typescript-eslint/camelcase
    api.post("connections", { user_id: teacher.id });
  }
  const { avatar, bio, cost, name, subject } = teacher;

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Price By Hour
          <strong>U$ {cost}</strong>
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          Contact the teacher
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
