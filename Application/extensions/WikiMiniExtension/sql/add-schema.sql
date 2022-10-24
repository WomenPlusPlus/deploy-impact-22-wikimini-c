-- Teachers
CREATE TABLE IF NOT EXISTS /*_*/wm_teachers (
  teacher_id                  INT unsigned        NOT NULL PRIMARY KEY auto_increment,
  teacher_name                VARCHAR(255)        NOT NULL, -- Name of the teacher
  teacher_user_name           VARCHAR(255)        NOT NULL -- Username of the teacher
)/*$wgDBTableOptions*/;

-- Teachers index
CREATE INDEX /*i*/wm_teacher_id ON /*_*/wm_teachers (teacher_id);
CREATE INDEX /*i*/wm_teacher_name ON /*_*/wm_teachers (teacher_name);
CREATE INDEX /*i*/wm_teacher_user_name ON /*_*/wm_teachers (teacher_user_name);

-- Classes
CREATE TABLE IF NOT EXISTS /*_*/wm_classes (
  class_id                  INT unsigned        NOT NULL PRIMARY KEY auto_increment,
  class_name                VARCHAR(255)        NOT NULL, -- Name of the class
  class_start               varbinary(14)       NOT NULL, -- Start time of the class
  class_end                 varbinary(14)       NOT NULL, -- End time of the class
  class_teacher_id          INT unsigned        NOT NULL, -- connect to teachers table (linking wm_teachers.teacher_id)
  class_token               VARCHAR(255)        NOT NULL -- Token needed to enroll (teacher can send to students)
)/*$wgDBTableOptions*/;

-- Classes index
CREATE INDEX /*i*/wm_class_id ON /*_*/wm_classes (class_id);
CREATE INDEX /*i*/wm_class_name ON /*_*/wm_classes (class_name);
CREATE INDEX /*i*/wm_class_start ON /*_*/wm_classes (class_start);
CREATE INDEX /*i*/wm_class_end ON /*_*/wm_classes (class_end);
CREATE INDEX /*i*/wm_class_teacher_id ON /*_*/wm_classes (class_teacher_id);
CREATE INDEX /*i*/wm_class_token ON /*_*/wm_classes (class_token);

-- Students
CREATE TABLE IF NOT EXISTS /*_*/wm_students (
  student_id                  INT unsigned        NOT NULL PRIMARY KEY auto_increment,
  student_name                VARCHAR(255)        NOT NULL, -- Name of the student
  student_user_name           VARCHAR(255)        NOT NULL -- Username of the student
)/*$wgDBTableOptions*/;

-- Students index
CREATE INDEX /*i*/wm_student_name ON /*_*/wm_students (student_name);
CREATE INDEX /*i*/wm_student_user_name ON /*_*/wm_students (student_user_name);

-- Links the students with their classes.
CREATE TABLE IF NOT EXISTS /*_*/wm_students_per_class (
  student_id                INT unsigned        NOT NULL, -- Foreign key on wm_students.student_id
  class_id                  INT unsigned        NOT NULL, -- Foreign key on wm_classes.class_id
  enrollment_time           varbinary(14)      NOT NULL -- Time at which the student enrolled to the class

)/*$wgDBTableOptions*/;

CREATE UNIQUE INDEX /*i*/wm_student_class ON /*_*/wm_students_per_class (student_id, class_id);
CREATE INDEX /*i*/wm_class_id ON /*_*/wm_students_per_class (class_id);
CREATE INDEX /*i*/wm_enroll_time ON /*_*/wm_students_per_class (enrollment_time);