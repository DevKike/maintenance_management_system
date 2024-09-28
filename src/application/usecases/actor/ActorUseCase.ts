import { IActor } from "../../../domain/entities/actor/IActor";
import { IActorService } from "../../../domain/entities/actor/IActorService";
import { IActorUseCase } from "../../../domain/entities/actor/IActorUseCase";
import { IRoleService } from "../../../domain/entities/role/IRoleService";
import { Message } from "../../../domain/enums/message/Message";
import { AlreadyExistsException } from "../../../domain/exceptions/AlreadyExistsException";
import { NotFoundException } from "../../../domain/exceptions/NotFoundException";

export class ActorUseCase implements IActorUseCase {
  constructor(private readonly actorService: IActorService, private readonly roleService: IRoleService) {}

  async createActor(actor: IActor): Promise<void> {
    const queryParams: Partial<IActor> = {
      id: actor.id,
      phone_number: actor.phone_number,
      email: actor.email,
      document_number: actor.document_number,
    };

    const isActorExisting = await this.actorService.getActorsByQueryParams(queryParams);

     if (isActorExisting.length > 0) {
      throw new AlreadyExistsException(Message.ACTOR_ALREADY_EXISTS_EXCEPTION);
    }

    const actorRoleId = actor.role;
    const isActorRoleExisting = await this.roleService.getRoleById(actorRoleId);
    
    if(!isActorRoleExisting) {
      throw new NotFoundException(Message.NOT_ROLES_FOUND);
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
}
