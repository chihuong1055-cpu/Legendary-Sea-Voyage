class BattleEngine {
  calculateDamage(attacker, defender, skillMultiplier) {
    const baseDamage = attacker.stats.atk * skillMultiplier;
    const defenseReduction = defender.stats.def * 0.5;
    const damage = Math.max(1, baseDamage - defenseReduction);
    if (Math.random() < attacker.stats.critRate / 100) {
      return damage * (1 + attacker.stats.critDamage / 100);
    }
    return damage;
  }

  determineTurnOrder(playerTeam, enemyTeam) {
    const allCombatants = [
      ...playerTeam.map(h => ({ ...h, side: 'player' })),
      ...enemyTeam.map(v => ({ ...v, side: 'enemy' }))
    ];
    return allCombatants.sort((a, b) => b.stats.speed - a.stats.speed);
  }

  canAct(hero) {
    if (!hero.effects) return true;
    const disablingEffects = ['Stun', 'Freeze', 'Petrify'];
    return !hero.effects.some(e => disablingEffects.includes(e.name));
  }
}

module.exports = BattleEngine;
