import { Test, TestingModule } from '@nestjs/testing';
import { UserGroupCategoriesService } from './user-group-categories.service';

describe('UserGroupCategoriesService', () => {
  let service: UserGroupCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserGroupCategoriesService],
    }).compile();

    service = module.get<UserGroupCategoriesService>(UserGroupCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
