import { IActor } from "../../../domain/entities/actor/IActor";
import { IActorService } from "../../../domain/entities/actor/IActorService";
import { IActorUseCase } from "../../../domain/entities/actor/IActorUseCase";
import { IRoleService } from "../../../domain/entities/role/IRoleService";
import { Message } from "../../../domain/enums/message/Message";
import { RoleId } from "../../../domain/enums/role/Role";
import { AlreadyExistsException } from "../../../domain/exceptions/AlreadyExistsException";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";

export class ActorUseCase implements IActorUseCase {
  constructor(
    private readonly actorService: IActorService,
    private readonly roleService: IRoleService
  ) {}

  async createActor(actor: IActor): Promise<void> {
    if (actor.phone_number) {
      const existingActorByPhoneNumber =
        await this.actorService.getActorsByQueryParams({
          phone_number: actor.phone_number,
        });
      if (existingActorByPhoneNumber.length > 0) {
        throw new AlreadyExistsException(
          `${Message.ACTOR_ALREADY_EXISTS_EXCEPTION} with phone_number: ${actor.phone_number}`
        );
      }
    }

    if (actor.email) {
      const existingActorByEmail =
        await this.actorService.getActorsByQueryParams({ email: actor.email });
      if (existingActorByEmail.length > 0) {
        throw new AlreadyExistsException(
          `${Message.ACTOR_ALREADY_EXISTS_EXCEPTION} with email: ${actor.email}`
        );
      }
    }

    if (actor.document_number) {
      const existingActorByDocumentNumber =
        await this.actorService.getActorsByQueryParams({
          document_number: actor.document_number,
        });
      if (existingActorByDocumentNumber.length > 0) {
        throw new AlreadyExistsException(
          `${Message.ACTOR_ALREADY_EXISTS_EXCEPTION} with document_number: ${actor.document_number}`
        );
      }
    }

    const actorRoleId = actor.role;
    const isActorRoleExisting = await this.roleService.getRoleById(actorRoleId);

    if (!isActorRoleExisting) {
      throw new NotFoundException(Message.NOT_ROLES_FOUND);
    }

    if (
      actor.role === RoleId.SYSTEM_COORDINATOR ||
      actor.role === RoleId.SYSTEM_COORDINATOR
    ) {
      const existingCoordinator =
        await this.actorService.getActorsByQueryParams({
          role: actor.role,
          department: actor.department,
        });

      if (existingCoordinator.length > 0) {
        throw new AlreadyExistsException(Message.COORDINATOR_ALREADY_EXISTS);
      }
    }

    await this.actorService.createActor(actor);
  }

  async getActors(page: number, limit: number): Promise<IActor[]> {
    const actors = await this.actorService.getActors(page, limit);

    if (!actors || actors.length === 0) {
      throw new NotFoundException(Message.NOT_ACTORS_FOUND);
    }

    return actors;
  }

  async getActorsByQueryParams(params: Partial<IActor>): Promise<IActor[]> {
    const actor = await this.actorService.getActorsByQueryParams(params);

    if (!actor || actor.length === 0) {
      throw new NotFoundException(Message.NOT_ACTOR_FOUND);
    }

    return actor;
  }

  async updateActorById(id: number, actor: IActor): Promise<void> {
    try {
      this.actorService.updateActorById(id, actor);
    } catch (error) {
      throw error;
    }
  }
}
