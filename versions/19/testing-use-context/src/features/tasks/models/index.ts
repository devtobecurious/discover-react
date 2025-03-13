export interface Task {
    id: number
    text: string
    state: 'draft' | 'backlog' | 'starting' | 'working' | 'testing' | 'done'
}