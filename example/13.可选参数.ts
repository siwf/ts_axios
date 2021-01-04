function buildName(firstname:string, lastName?: string, ...hh: number []): string {
  console.log(hh)
  return ''
}
let build: (s: string, y?: string, ...hh: number [] ) => string = buildName