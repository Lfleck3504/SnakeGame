export default interface IActor {
    update(): void;
    readonly type: string; 
    isActive: boolean;
  }