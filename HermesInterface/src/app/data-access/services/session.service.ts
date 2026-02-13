import { Injectable, signal, computed } from '@angular/core';

export type UserRole = 'Admin' | 'Operador' | 'Supervisor';

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  photoUrl?: string | null;   
  avatarId?: string | null;  
};

@Injectable({ providedIn: 'root' })
export class SessionService {
  private readonly _user = signal<UserProfile>({
    id: 'u-1',
    name: 'Hermes Admin',
    email: 'admin@hermes.local',
    role: 'Admin',
    photoUrl: null,
    avatarId: 'robot-01',
  });

  user = computed(() => this._user());

  setAvatar(avatarId: string) {
    this._user.update(u => ({ ...u, avatarId, photoUrl: null }));
  }

  setPhoto(photoUrl: string) {
    this._user.update(u => ({ ...u, photoUrl, avatarId: null }));
  }

  updateProfile(data: Partial<Pick<UserProfile, 'name' | 'email'>>) {
    this._user.update(u => ({ ...u, ...data }));
  }

  logout() {
    // mock por enquanto
    console.log('logout');
  }
}
