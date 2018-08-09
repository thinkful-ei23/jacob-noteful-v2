DROP TABLE IF EXISTS notes_tags;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS notes;
DROP TABLE IF EXISTS folders;



CREATE TABLE folders (
    id serial PRIMARY KEY,
    name text NOT NULL
);

ALTER SEQUENCE folders_id_seq RESTART WITH 1000;

CREATE TABLE notes (
  id serial PRIMARY KEY,
  title text NOT NULL,
  content text,
  created timestamp DEFAULT now(),
  folder_id int REFERENCES folders(id) ON DELETE SET NULL
);

CREATE TABLE tags (
  id serial PRIMARY KEY,
  name text NOT NULL UNIQUE
);

CREATE TABLE notes_tags (
  note_id INTEGER NOT NULL REFERENCES notes ON DELETE CASCADE,
  tag_id INTEGER NOT NULL REFERENCES tags ON DELETE CASCADE
);


INSERT INTO notes
  (title, content) VALUES
    ('How to Win Friends and Influence People', 'Very interesting book'), ('Complete Software Developers Career Guide', 'John Sonmez'), ('The Pragmatic Programmer', 'Andrew Hunt'), ('Steve Jobs', 'Walter Isaacson'),('Silicon Valley', 'Lorem ipsum dolor sit amet'), ('Halt and Catch Fire', 'it is the early 1980s, and the spirit of innovation in personal computing is about to catch fire. Hot on the trail is a renegade trio a visionary, an engineer and a prodigy who risk everything to realize their vision of building a computer that can change the future.')

INSERT INTO folders (name) VALUES
  ('Archive'),
  ('Drafts'),
  ('Personal'),
  ('Work');

INSERT INTO notes (title, content, folder_id) VALUES
  (
    '5 life lessons learned from cats',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...',
    1000
  );

INSERT INTO tags (name) VALUES
  ('Books'),
  ('Movies'),
  ('Series');

INSERT INTO notes_tags 
  (note_id, tag_id) VALUES
  (1, 1),
  (2, 1),
  (3, 1),
  (4, 1),
  (5, 3);

SELECT * FROM tags;
  