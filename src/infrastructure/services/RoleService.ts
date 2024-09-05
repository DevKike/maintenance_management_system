
import { IRole } from '../../domain/entities/IRole';
import { IRoleRepository } from '../../domain/repositories/IRoleRepository';
import { IRoleService } from '../../domain/services/IRoleService';
import { RoleRepository } from '../repositories/RoleRepository';

export class RoleService  implements IRoleService {
  private roleRepository: IRoleRepository;
  
  constructor() {
    this.roleRepository = new RoleRepository();
  }

  async getRoles(): Promise<IRole[]> {
    try {
      return await this.roleRepository.getAll();
    } catch (error) {
      throw error;
    }
  }
}