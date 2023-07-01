import { Test, TestingModule } from '@nestjs/testing';
import { ProfilesResolver } from './profiles.resolver';
import { ProfilesService } from './profiles.service';
import { beforeEach, describe, it, expect } from 'vitest';

describe('ProfilesResolver', () => {
  let resolver: ProfilesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfilesResolver, ProfilesService],
    }).compile();

    resolver = module.get<ProfilesResolver>(ProfilesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
