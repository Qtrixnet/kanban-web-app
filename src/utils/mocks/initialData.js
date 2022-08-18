import {v4 as uuidv4} from 'uuid';

const initialData = [
  {
    title: 'Kanban 1',
    slug: 'kanban',
    id: uuidv4(),
    columns: [
      {
        title: 'todo',
        id: uuidv4(),
        tasks: [
          {
            title: 'create popups',
            description: 'create popups for the app',
            id: uuidv4(),
            subtasks: [
              {
                id: uuidv4(),
                title: 'create add new task popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create edit task popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create delete task popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create add new board popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create edit board popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create delete popup',
                done: false,
              },
            ]
          },
        ]
      },
      {
        title: 'doing',
        id: uuidv4(),
        tasks: [
          {
            title: 'create mocks',
            description: 'create mock data',
            id: uuidv4(),
            subtasks: [
              {
                id: uuidv4(),
                title: 'create boards',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create tasks',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create subtasks',
                done: false,
              }
            ]
          },
        ]
      },
      {
        title: 'done',
        id: uuidv4(),
        statuses: ['todo', 'doing', 'done'],
        currentStatus: 'done',
        tasks: [
          {
            title: 'create header',
            description: 'create header with logo, add task button and options button',
            id: uuidv4(),
            subtasks: [
              {
                id: uuidv4(),
                title: 'create logo',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create options button',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create add new task button',
                done: true,
              }
            ]
          },
          {
            title: 'create sidebar',
            description: 'create sidebar with navigation panel and theme switcher',
            id: uuidv4(),
            subtasks: [
              {
                id: uuidv4(),
                title: 'create navigation',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create theme switcher',
                done: true,
              },
            ]
          }
        ]
      }
    ]
  },
  {
    title: 'Kanban 2',
    slug: '/',
    id: uuidv4(),
    columns: [
      {
        title: 'todo',
        id: uuidv4(),
        tasks: [
          {
            title: 'create popups',
            description: 'create popups for the app',
            id: uuidv4(),
            subtasks: [
              {
                id: uuidv4(),
                title: 'create add new task popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create edit task popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create delete task popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create add new board popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create edit board popup',
                done: false,
              },
              {
                id: uuidv4(),
                title: 'create delete popup',
                done: false,
              },
            ]
          },
        ]
      },
      {
        title: 'doing',
        id: uuidv4(),
        tasks: [
          {
            title: 'create mocks',
            description: 'create mock data',
            id: uuidv4(),
            subtasks: [
              {
                id: uuidv4(),
                title: 'create boards',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create tasks',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create subtasks',
                done: false,
              }
            ]
          },
        ]
      },
      {
        title: 'done',
        id: uuidv4(),
        statuses: ['todo', 'doing', 'done'],
        currentStatus: 'done',
        tasks: [
          {
            title: 'create header',
            description: 'create header with logo, add task button and options button',
            id: uuidv4(),
            subtasks: [
              {
                id: uuidv4(),
                title: 'create logo',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create options button',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create add new task button',
                done: true,
              }
            ]
          },
          {
            title: 'create sidebar',
            description: 'create sidebar with navigation panel and theme switcher',
            id: uuidv4(),
            subtasks: [
              {
                id: uuidv4(),
                title: 'create navigation',
                done: true,
              },
              {
                id: uuidv4(),
                title: 'create theme switcher',
                done: true,
              },
            ]
          }
        ]
      }
    ]
  },
]

export default initialData;
