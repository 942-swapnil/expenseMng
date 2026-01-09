import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'home', component: HomeComponent },
    { path: 'home', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
    { path: 'login', loadComponent: () => import('./core/auth/login/login.component').then(m => m.LoginComponent) },
    { path: 'register', loadComponent: () => import('./core/auth/register/register.component').then(m => m.RegisterComponent) },
    { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
    { path: 'expenses', loadComponent: () => import('./features/expense/expense.component').then(m => m.ExpenseComponent) },
    { path: 'investments', loadComponent: () => import('./features/investment/investment.component').then(m => m.InvestmentComponent) },
    { path: 'settings', loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent) },
    { path: 'plans', loadComponent: () => import('./features/generate-plan/generate-plan.component').then(m => m.GeneratePlanComponent) },
    { path: '**', redirectTo: 'home' }
];
