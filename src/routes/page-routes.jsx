import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import LoginPage from '../pages/login-page';
import ClassesPage from '../pages/classes-page';
import DashboardPage from '../pages/dashboard-page';
import RegisterPage from '../pages/register-page';
import CreateTaskPage from '../pages/create-task-page';
import AssignStudentPage from '../pages/assign-student-page';
import TasksPage from '../pages/tasks-page';
import HomePage from '../pages/home-page/home';
import StudentTaskPage from '../pages/student-task-page';
import ArticlePage from '../pages/article-page/article';
import SecondaryLayout from '../layouts/secondary-layout';

const PageRoutes = () => (
  <Routes>
    <Route index element={<HomePage />} />
    <Route path="/article" element={<ArticlePage />} />
    <Route path="/" element={<MainLayout />}>
      <Route path="/class/:id/dashboard" element={<DashboardPage />} />
      <Route path="/class/:id/create-task" element={<CreateTaskPage />} />
      <Route path="/class/:classId/task/:id/assign-student" element={<AssignStudentPage />} />
      <Route path="/class/:id/tasks" element={<TasksPage />} />
      <Route path="/student-task" element={<StudentTaskPage />} />
    </Route>
    <Route path="/" element={<SecondaryLayout />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/classes" element={<ClassesPage />} />
    </Route>
  </Routes>
);

export default PageRoutes;
