-- Classes
CREATE TABLE IF NOT EXISTS /*_*/wm_classes (
  class_id                  INT unsigned        NOT NULL PRIMARY KEY auto_increment,
  class_name                VARCHAR(255)        NOT NULL UNIQUE, -- Name of the class
  class_teacher_user_id     INT unsigned        NOT NULL  -- foreign key to wm_teachers.teacher_user_id)
)/*$wgDBTableOptions*/;

-- Classes index
CREATE INDEX /*i*/wm_class_id ON /*_*/wm_classes (class_id);
CREATE INDEX /*i*/wm_class_name ON /*_*/wm_classes (class_name);
CREATE INDEX /*i*/wm_class_teacher_user_id ON /*_*/wm_classes (class_teacher_user_id);

-- Links the students with their classes.
CREATE TABLE IF NOT EXISTS /*_*/wm_students_per_class (
  assign_id                 INT unsigned        NOT NULL PRIMARY KEY auto_increment,
  student_id                INT unsigned        NOT NULL, -- Foreign key to wm_students.student_user_id
  class_id                  INT unsigned        NOT NULL, -- Foreign key on wm_classes.class_id
  enrollment_time           varbinary(14)       NOT NULL -- Time at which the student enrolled to the class

)/*$wgDBTableOptions*/;

CREATE INDEX /*i*/wm_student_class ON /*_*/wm_students_per_class (student_id, class_id);
CREATE INDEX /*i*/wm_class_id ON /*_*/wm_students_per_class (class_id);

-- A student can only be in a class one time
CREATE UNIQUE INDEX /*i*/unique_class_student ON /*_*/wm_students_per_class (class_id, student_id);

-- Tasks
CREATE TABLE IF NOT EXISTS /*_*/wm_tasks (
  task_id                  INT unsigned        NOT NULL PRIMARY KEY auto_increment,
  task_name                VARCHAR(255)        NOT NULL UNIQUE, -- Name of the task
  task_type                VARCHAR(255)        NOT NULL,  -- Edit article, create article, etc.
  task_subject             VARCHAR(255)        NOT NULL,  -- History, Mathematics, etc.
  task_description         VARCHAR(255)        NOT NULL,  -- Short description of the task.
  task_reference_link      VARCHAR(255),                  -- Link to the article.
  task_criteria            VARCHAR(255)        NOT NULL,  -- Evaluation criteria.
  class_id                 INT unsigned        NOT NULL,  -- Foreign key to wm_classes.class_id
  page_name                VARCHAR(255),                  -- Name of the article -> for fetch
  creation_date            varbinary(14)                  -- When task was created
)/*$wgDBTableOptions*/;

-- Tasks index
CREATE INDEX /*i*/wm_task_id ON /*_*/wm_tasks (task_id);
CREATE INDEX /*i*/wm_task_name ON /*_*/wm_tasks (task_name);

-- Links students to their tasks
CREATE TABLE IF NOT EXISTS /*_*/wm_tasks_to_students (
  assign_id               INT unsigned        NOT NULL PRIMARY KEY auto_increment,
  task_id                 INT unsigned        NOT NULL,
  student_id              INT unsigned        NOT NULL,
  task_status             VARCHAR(255)        NOT NULL,
  task_feedback           VARCHAR(255),
  task_result              VARCHAR(255)
)/*$wgDBTableOptions*/;

-- Tasks to Students index
CREATE INDEX /*i*/wm_task_id ON /*_*/wm_tasks_to_students (task_id);
CREATE INDEX /*i*/wm_student_id ON /*_*/wm_tasks_to_students (student_id);
CREATE UNIQUE INDEX /*i*/unique_task_student ON /*_*/wm_tasks_to_students (task_id, student_id);