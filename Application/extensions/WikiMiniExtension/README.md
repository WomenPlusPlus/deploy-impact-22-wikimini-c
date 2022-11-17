# WikiMini Extension

The WikiMini extension is a collection of API endpoints and other implementations (additional DB tables, groups & permissions, and more.) that provides the core structure to the WikiMini webpage - a platform that connects teachers and students.

The basic structure of this repository is based on the BoilerPlate extension.

## Installation

This extension is already installed in the current instance of the MediaWiki software, but if you want to install this extension on your wiki to see how it works, please follow the below steps:

* Download and place the folder in your ```extensions/``` folder.
* Add the below code at the bottom of your ```LocalSettings.php```:

```
wfLoadExtension('WikiMiniExtension');
```

* To verify that the extension is successfully installed navigate to ```Special:Version``` on your wiki instance.

## Usage

This extension is composed by four (4) major components:

### API Endpoints

If you navigate to the ```includes/api``` folder inside the extension you can find multiple endpoints created and below I'll be giving a quick explanation of what each API does and how you can use them.

#### Create a Class

Allows the teacher to create a new class.

<b>POST request →</b>
<code>
http://localhost/wikimedia/api.php?action=createclass
</code>

<u>Body of the request:</u>
* class_name = class-name-value
* teacher_id = teacher-id-value

#### <details><summary>2. Create a Task</summary>

Allows the teacher to create a new task.

<b>POST request →</b>
<code>
http://localhost/wikimedia/api.php?action=createtask
</code>

<u>Body of the request:</u>
* task_name = class-name-value
* task_type = teacher-id-value
* task_subject = task-subject-value
* task_description = task-description-value
* task_criteria = task-criteria-value
* class_id = class-id-value
* task_reference_link = task-reference-link-value

</details>

#### 2. Edit a Task

Allows to edit a previously created task.

<b>POST request →</b>
<code>
http://localhost/wikimedia/api.php?action=edittask
</code>

<u>Body of the request:</u>
* task_id = task-id-value
* task_name = class-name-value
* task_type = teacher-id-value
* task_subject = task-subject-value
* task_description = task-description-value
* task_criteria = task-criteria-value
* class_id = class-id-value
* task_reference_link = task-reference-link-value

#### 3. Delete a Task

Allows the deletion of a previously created task.

<b>POST request →</b>
<code>
http://localhost/wikimedia/api.php?action=deletetask
</code>

<u>Body of the request:</u>
* task_id = task-id-value

#### 4. Add a Student to a Class

Assigns students to a specific class.

<b>POST request →</b>
<code>
http://localhost/wikimedia/api.php?action=addstudent
</code>

<u>Body of the request:</u>
* class_id = class-id-value
* student_name = student-name-value

#### 5. Give a Task to a Student

Assigns specific tasks to a specific student(s).

<b>POST request →</b>
<code>
http://localhost/wikimedia/api.php?action=givetask
</code>

<u>Body of the request:</u>
* task_id = task-id-value
* student_id = student-id-value

#### 6. Fetch All Classes

Allows to fetch all created classes.

<b>GET request →</b>
<code>
http://localhost/wikimedia/api.php?action=query&list=allclasses
</code>

#### 7. Fetch Task Details

Allows to fetch all the information about a specific task.

<b>GET request →</b>
<code>
http://localhost/wikimedia/api.php?action=query&list=gettaskdetails&task_id=1
</code>

#### 8. Fetch All Students in a Class

Allows to fetch all the students assigned to a specific class.

<b>GET request →</b>
<code>
http://localhost/wikimedia/api.php?action=query&list=studentsinclass&class_id=1
</code>

#### 9. Fetch All Tasks created for a Class

Allows to fetch all the tasks that were created for a specific class.

<b>GET request →</b>
<code>
http://localhost/wikimedia/api.php?action=query&list=getclasstasks&class_id=1
</code>

#### 10. Fetch All Tasks assigned to a Student

Allows to fetch all the tasks that were assigned to a specific student.

<b>GET request →</b>
<code>
http://localhost/wikimedia/api.php?action=query&list=getstudentstasks&student_id=1


<blockquote>
One important thing that is missing in the APIs is validation - does this user have permissions to do this or not, does the student already have more than 1 task assigned to him, etc.
</blockquote>

### Database tables

![alt text](https://github.com/vichoiglesias/wikimini-c/blob/master/Application/extensions/WikiMiniExtension/images/wikimini.png?raw=true)

### Groups & Permissions

To create the Teacher and Student objects we used MediaWiki's native groups functionality. This allowed to then give those groups different rights based on what they are allowed to do on the webpage.

For example, a Teacher can create a class, but a Student can't.

To see how this was implemented navigate to ```extension.json``` file.

The attribution of a new user account to a group was done automatically - using the ```onApiGetAllowedParameters``` and ```onApiAfterExecute``` hooks.

### Readability index

The readability index is a tool we provided for teachers to more easily select an article appropriate for the grade her/his students are in.

It uses the ARI (Automated Readability Index) method, which assesses the U.S. grade level required to read a piece of text. This method was selected as it allows a more clear distinction across younger grades.

In the below image you can see how the score is translated into a grade - age level.

![alt text](https://github.com/vichoiglesias/wikimini-c/blob/master/Application/extensions/WikiMiniExtension/images/readability.png?raw=true)

## Testing

This extension implements the **[recommended entry points](https://www.mediawiki.org/wiki/Continuous_integration/Entry_points)** of Wikimedia CI for PHP and Front-end projects.

Due to time constraints, no other testing was done.