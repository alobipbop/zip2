export interface User {
    id: number;
    email: string;
    name?: string;
    avatar?: string;
    age?: number;
    gender?: string;
    last_login?: Date;
    created_at?: Date;
}

export interface TypeCategory {
    id: number;
    user_id: number;
    name: string;
    color: string;
    weight: number;
    created_at?: Date;
}

export interface Goal {
    id: number;
    user_id: number;
    title: string;
    description?: string;
    status: 'active' | 'completed' | 'archived';
    start_date?: Date;
    end_date?: Date;
    created_at?: Date;
}

export interface Task {
    id: number;
    goal_id: number;
    type_id?: number;
    title: string;
    description?: string;
    status: number;
    unit?: string;
    target_value?: number;
    target_total?: number;
    created_at?: Date;
}

export interface Tracking {
    id: number;
    task_id: number;
    value: number;
    track_date: Date;
    track_note?: string;
    created_at?: Date;
}

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}