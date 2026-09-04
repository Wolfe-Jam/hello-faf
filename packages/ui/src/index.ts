// @hello-faf/ui — shared component contracts for the reference monorepo.
export type Tier = 'trophy' | 'gold' | 'silver' | 'bronze' | 'green';

export function tierFor(score: number): Tier {
  if (score >= 100) return 'trophy';
  if (score >= 99) return 'gold';
  if (score >= 95) return 'silver';
  if (score >= 85) return 'bronze';
  return 'green';
}
