"use client"
import React, { useState } from 'react';
import styles from '../../style/task.module.css'

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: 'Finish Dashboard UI', 
      description: 'Polish task and analytics cards',
      deadline: '2023-12-15'
    },
    { 
      id: 2, 
      title: 'Fix Styling', 
      description: 'Apply consistent modern CSS',
      deadline: '2023-12-20'
    },
    { 
      id: 3, 
      title: 'Connect Backend', 
      description: 'Fetch real tasks from server',
      deadline: '2023-12-10'
    },
  ]);
  
  const [newTask, setNewTask] = useState({ 
    title: '', 
    description: '', 
    deadline: '' 
  });

  const handleAddTask = () => {
    if (newTask.title.trim() === '') return;
    
    const task = {
      id: Date.now(),
      title: newTask.title,
      description: newTask.description,
      deadline: newTask.deadline || ''
    };
    
    setTasks([...tasks, task]);
    setNewTask({ title: '', description: '', deadline: '' });
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const getDeadlineStatus = (deadline: string) => {
  if (!deadline) return null;
  
  const today = new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 'Urgent';
  if (diffDays <= 3) return 'Soon';
  return 'Normal';
};

  const getDeadlineClass = (status: string | null) => {
    switch(status) {
      case 'Urgent': return styles.deadlineUrgent;
      case 'Soon': return styles.deadlineSoon;
      case 'Normal': return styles.deadlineNormal;
      default: return '';
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Tasks</h1>
      
      {/* Add Task Form */}
      <div className={styles.addTaskForm}>
        <h2 className={styles.formHeader}>Add New Task</h2>
        <div>
          <label className={styles.label}>Title</label>
          <input
            type="text"
            value={newTask.title}
            onChange={(e) => setNewTask({...newTask, title: e.target.value})}
            className={styles.input}
            placeholder="Task title"
          />
        </div>
        <div>
          <label className={styles.label}>Description</label>
          <textarea
            value={newTask.description}
            onChange={(e) => setNewTask({...newTask, description: e.target.value})}
            className={`${styles.input} ${styles.textarea}`}
            placeholder="Task description"
          />
        </div>
        <div>
          <label className={styles.deadlineLabel}>Deadline</label>
          <input
            type="date"
            value={newTask.deadline}
            onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
            className={styles.deadlineInput}
          />
        </div>
        <button
          onClick={handleAddTask}
          className={styles.addButton}
        >
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div className={styles.taskList}>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            const deadlineStatus = getDeadlineStatus(task.deadline);
            return (
              <div key={task.id} className={styles.taskCard}>
                <div className={styles.taskContent}>
                  <h2 className={styles.taskTitle}>{task.title}</h2>
                  <p className={styles.taskDescription}>{task.description}</p>
                  {task.deadline && (
                    <div>
                      <span className={`${styles.deadlineText} ${getDeadlineClass(deadlineStatus)}`}>
                        Deadline: {task.deadline} ({deadlineStatus})
                      </span>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className={styles.deleteButton}
                  aria-label="Delete task"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            );
          })
        ) : (
          <div className={styles.emptyState}>
            No tasks available. Add a new task to get started!
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;