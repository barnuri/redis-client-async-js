import redis, { ClientOpts, Callback, RedisClient, ServerInfo, Multi } from 'redis';
import bluebird from 'bluebird';

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

export interface RedisClientAsync extends RedisClient {
    xadd(key: string, id: string, field: string, value: string, field2?: string, value2?: string, cb?: Callback<any>): any;
    xaddAsync(key: string, id: string, field: string, value: string, field2?: string, value2?: string): Promise<object>;

    xrevrange(key: string, end: string, start: string, count?: number, cb?: Callback<any>): any;
    xrevrange(key: string, end: string, start: string, cb?: Callback<any>): any;
    xrevrangeAsync(key: string, end: string, start: string, count?: number): Promise<object>;

    getKeyWithFallback(key: string, fallback: () => Promise<object>, ttlInSecs?: number): Promise<{ data: any; fromCache: boolean }>;
    duplicateAsync(options?: ClientOpts): Promise<RedisClientAsync>;
    sendCommandAsync(command: string, args?: any[]): Promise<object>;
    send_commandAsync(command: string, args?: any[]): Promise<object>;
    multiAsync(args?: Array<Array<string | number>>): Promise<Multi>;
    MULTIAsync(args?: Array<Array<string | number>>): Promise<Multi>;
    batchAsync(args?: Array<Array<string | number>>): Promise<Multi>;
    BATCHAsync(args?: Array<Array<string | number>>): Promise<Multi>;
    monitorAsync(): Promise<undefined>;
    MONITORAsync(): Promise<undefined>;
    infoAsync(section?: string | string[]): Promise<ServerInfo>;
    INFOAsync(section?: string | string[]): Promise<ServerInfo>;
    pingAsync(message: string): Promise<string>;
    PINGAsync(message: string): Promise<string>;
    publishAsync(channel: string, value: string): Promise<number>;
    PUBLISHAsync(channel: string, value: string): Promise<number>;
    authAsync(password: string): Promise<string>;
    AUTHAsync(password: string): Promise<string>;
    appendAsync(key: string, value: string): Promise<number>;
    APPENDAsync(key: string, value: string): Promise<number>;
    bgrewriteaofAsync(): Promise<'OK'>;
    BGREWRITEAOFAsync(): Promise<'OK'>;
    bgsaveAsync(): Promise<string>;
    BGSAVEAsync(): Promise<string>;
    bitcountAsync(key: string): Promise<number>;
    bitcountAsync(key: string, start: number, end: number): Promise<number>;
    BITCOUNTAsync(key: string): Promise<number>;
    BITCOUNTAsync(key: string, start: number, end: number): Promise<number>;
    bitopAsync(operation: string, destkey: string, key1: string, key2: string, key3: string): Promise<number>;
    bitopAsync(operation: string, destkey: string, ...args: string[]): Promise<boolean>;
    BITOPAsync(operation: string, destkey: string, key1: string, key2: string, key3: string): Promise<number>;
    BITOPAsync(operation: string, destkey: string, ...args: string[]): Promise<boolean>;
    bitposAsync(key: string, bit: number, start: number, end: number): Promise<number>;
    BITPOSAsync(key: string, bit: number, start: number, end: number): Promise<number>;
    brpoplpushAsync(source: string, destination: string, timeout: number): Promise<string | null>;
    BRPOPLPUSHAsync(source: string, destination: string, timeout: number): Promise<string | null>;
    commandAsync(): Promise<Array<[string, number, string[], number, number, number]>>;
    COMMANDAsync(): Promise<Array<[string, number, string[], number, number, number]>>;
    dbsizeAsync(): Promise<number>;
    DBSIZEAsync(): Promise<number>;
    decrAsync(key: string): Promise<number>;
    DECRAsync(key: string): Promise<number>;
    decrbyAsync(key: string, decrement: number): Promise<number>;
    DECRBYAsync(key: string, decrement: number): Promise<number>;
    discardAsync(): Promise<'OK'>;
    DISCARDAsync(): Promise<'OK'>;
    dumpAsync(key: string): Promise<string>;
    DUMPAsync(key: string): Promise<string>;
    echoAsync<T extends string>(message: T): Promise<T>;
    ECHOAsync<T extends string>(message: T): Promise<T>;
    expireAsync(key: string, seconds: number): Promise<number>;
    EXPIREAsync(key: string, seconds: number): Promise<number>;
    expireatAsync(key: string, timestamp: number): Promise<number>;
    EXPIREATAsync(key: string, timestamp: number): Promise<number>;
    flushallAsync(): Promise<string>;
    FLUSHALLAsync(): Promise<string>;
    flushdbAsync(): Promise<'OK'>;
    FLUSHDBAsync(): Promise<'OK'>;
    getAsync(key: string): Promise<string>;
    GETAsync(key: string): Promise<string>;
    getbitAsync(key: string, offset: number): Promise<number>;
    GETBITAsync(key: string, offset: number): Promise<number>;
    getrangeAsync(key: string, start: number, end: number): Promise<string>;
    GETRANGEAsync(key: string, start: number, end: number): Promise<string>;
    getsetAsync(key: string, value: string): Promise<string>;
    GETSETAsync(key: string, value: string): Promise<string>;
    hexistsAsync(key: string, field: string): Promise<number>;
    HEXISTSAsync(key: string, field: string): Promise<number>;
    hgetAsync(key: string, field: string): Promise<string>;
    HGETAsync(key: string, field: string): Promise<string>;
    hgetallAsync(key: string): Promise<{ [key: string]: any }>;
    HGETALLAsync(key: string): Promise<{ [key: string]: string }>;
    hincrbyAsync(key: string, field: string, increment: number): Promise<number>;
    HINCRBYAsync(key: string, field: string, increment: number): Promise<number>;
    hincrbyfloatAsync(key: string, field: string, increment: number): Promise<string>;
    HINCRBYFLOATAsync(key: string, field: string, increment: number): Promise<string>;
    hkeysAsync(key: string): Promise<string>;
    HKEYSAsync(key: string): Promise<string>;
    hlenAsync(key: string): Promise<number>;
    HLENAsync(key: string): Promise<number>;
    hsetAsync(key: string, field: string, value: string): Promise<number>;
    HSETAsync(key: string, field: string, value: string): Promise<number>;
    hsetnxAsync(key: string, field: string, value: string): Promise<number>;
    HSETNXAsync(key: string, field: string, value: string): Promise<number>;
    hstrlenAsync(key: string, field: string): Promise<number>;
    HSTRLENAsync(key: string, field: string): Promise<number>;
    hvalsAsync(key: string): Promise<string>;
    HVALSAsync(key: string): Promise<string>;
    incrAsync(key: string): Promise<number>;
    INCRAsync(key: string): Promise<number>;
    incrbyAsync(key: string, increment: number): Promise<number>;
    INCRBYAsync(key: string, increment: number): Promise<number>;
    incrbyfloatAsync(key: string, increment: number): Promise<string>;
    INCRBYFLOATAsync(key: string, increment: number): Promise<string>;
    keysAsync(pattern: string): Promise<string>;
    KEYSAsync(pattern: string): Promise<string>;
    lastsaveAsync(): Promise<number>;
    LASTSAVEAsync(): Promise<number>;
    lindexAsync(key: string, index: number): Promise<string>;
    LINDEXAsync(key: string, index: number): Promise<string>;
    linsertAsync(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string): Promise<string>;
    LINSERTAsync(key: string, dir: 'BEFORE' | 'AFTER', pivot: string, value: string): Promise<string>;
    llenAsync(key: string): Promise<number>;
    LLENAsync(key: string): Promise<number>;
    lpopAsync(key: string): Promise<string>;
    LPOPAsync(key: string): Promise<string>;
    lpushxAsync(key: string, value: string): Promise<number>;
    LPUSHXAsync(key: string, value: string): Promise<number>;
    lrangeAsync(key: string, start: number, stop: number): Promise<string>;
    LRANGEAsync(key: string, start: number, stop: number): Promise<string>;
    lremAsync(key: string, count: number, value: string): Promise<number>;
    LREMAsync(key: string, count: number, value: string): Promise<number>;
    lsetAsync(key: string, index: number, value: string): Promise<'OK'>;
    LSETAsync(key: string, index: number, value: string): Promise<'OK'>;
    ltrimAsync(key: string, start: number, stop: number): Promise<'OK'>;
    LTRIMAsync(key: string, start: number, stop: number): Promise<'OK'>;
    moveAsync(key: string, db: string | number): Promise<string>;
    MOVEAsync(key: string, db: string | number): Promise<string>;
    persistAsync(key: string): Promise<number>;
    PERSISTAsync(key: string): Promise<number>;
    pexpireAsync(key: string, milliseconds: number): Promise<number>;
    PEXPIREAsync(key: string, milliseconds: number): Promise<number>;
    pexpireatAsync(key: string, millisecondsTimestamp: number): Promise<number>;
    PEXPIREATAsync(key: string, millisecondsTimestamp: number): Promise<number>;
    psetexAsync(key: string, milliseconds: number, value: string): Promise<'OK'>;
    PSETEXAsync(key: string, milliseconds: number, value: string): Promise<'OK'>;
    pttlAsync(key: string): Promise<number>;
    PTTLAsync(key: string): Promise<number>;
    quitAsync(): Promise<'OK'>;
    QUITAsync(): Promise<'OK'>;
    randomkeyAsync(): Promise<string>;
    RANDOMKEYAsync(): Promise<string>;
    readonlyAsync(): Promise<string>;
    READONLYAsync(): Promise<string>;
    readwriteAsync(): Promise<string>;
    READWRITEAsync(): Promise<string>;
    renameAsync(key: string, newkey: string): Promise<'OK'>;
    RENAMEAsync(key: string, newkey: string): Promise<'OK'>;
    renamenxAsync(key: string, newkey: string): Promise<number>;
    RENAMENXAsync(key: string, newkey: string): Promise<number>;
    restoreAsync(key: string, ttl: number, serializedValue: string): Promise<'OK'>;
    RESTOREAsync(key: string, ttl: number, serializedValue: string): Promise<'OK'>;
    roleAsync(cb?: Callback<[string, number, Array<[string, string, string]>]>): boolean;
    ROLEAsync(cb?: Callback<[string, number, Array<[string, string, string]>]>): boolean;
    rpopAsync(key: string): boolean;
    RPOPAsync(key: string): boolean;
    rpoplpushAsync(source: string, destination: string): boolean;
    RPOPLPUSHAsync(source: string, destination: string): boolean;
    rpushxAsync(key: string, value: string): Promise<number>;
    RPUSHXAsync(key: string, value: string): Promise<number>;
    saveAsync(): Promise<string>;
    SAVEAsync(): Promise<string>;
    scardAsync(key: string): Promise<number>;
    SCARDAsync(key: string): Promise<number>;

    selectAsync(index: number | string);
    SELECTAsync(index: number | string);

    setAsync(key: string, value: string, flag?: string): Promise<'OK'>;
    setAsync(key: string, value: string, mode?: string, duration?: number, flag?: string): Promise<'OK' | undefined>;
    SETAsync(key: string, value: string, flag?: string): Promise<'OK'>;
    SETAsync(key: string, value: string, mode?: string, duration?: number, flag?: string): Promise<'OK' | undefined>;
    setbitAsync(key: string, offset: number, value: string): Promise<number>;
    SETBITAsync(key: string, offset: number, value: string): Promise<number>;
    setexAsync(key: string, seconds: number, value: string): Promise<number>;
    SETEXAsync(key: string, seconds: number, value: string): Promise<number>;
    setnxAsync(key: string, value: string): Promise<number>;
    SETNXAsync(key: string, value: string): Promise<number>;
    setrangeAsync(key: string, offset: number, value: string): Promise<number>;
    SETRANGEAsync(key: string, offset: number, value: string): Promise<number>;
    sismemberAsync(key: string, member: string): Promise<number>;
    SISMEMBERAsync(key: string, member: string): Promise<number>;
    slaveofAsync(host: string, port: string | number): Promise<string>;
    SLAVEOFAsync(host: string, port: string | number): Promise<string>;
    smembersAsync(key: string): Promise<string[]>;
    SMEMBERSAsync(key: string): Promise<string>;
    smoveAsync(source: string, destination: string, member: string): Promise<number>;
    SMOVEAsync(source: string, destination: string, member: string): Promise<number>;
    spopAsync(key: string, count: number): Promise<string>;
    SPOPAsync(key: string, count: number): Promise<string>;
    srandmemberAsync(key: string, count: number): Promise<string>;
    SRANDMEMBERAsync(key: string, count: number): Promise<string>;
    strlenAsync(key: string): Promise<number>;
    STRLENAsync(key: string): Promise<number>;
    syncAsync(): Promise<undefined>;
    SYNCAsync(): Promise<undefined>;
    timeAsync(): Promise<[string, string]>;
    TIMEAsync(): Promise<[string, string]>;
    ttlAsync(key: string): Promise<number>;
    TTLAsync(key: string): Promise<number>;
    typeAsync(key: string): Promise<string>;
    TYPEAsync(key: string): Promise<string>;
    unwatchAsync(): Promise<'OK'>;
    UNWATCHAsync(): Promise<'OK'>;

    waitAsync(numslaves: number, timeout: number): Promise<number>;
    WAITAsync(numslaves: number, timeout: number): Promise<number>;
    zcardAsync(key: string): Promise<number>;
    ZCARDAsync(key: string): Promise<number>;
    zcountAsync(key: string, min: number | string, max: number | string): Promise<number>;
    ZCOUNTAsync(key: string, min: number | string, max: number | string): Promise<number>;
    zincrbyAsync(key: string, increment: number, member: string): Promise<string>;
    ZINCRBYAsync(key: string, increment: number, member: string): Promise<string>;
    zlexcountAsync(key: string, min: string, max: string): Promise<number>;
    ZLEXCOUNTAsync(key: string, min: string, max: string): Promise<number>;
    zrangeAsync(key: string, start: number, stop: number, withscores?: string): Promise<string>;
    ZRANGEAsync(key: string, start: number, stop: number, withscores?: string): Promise<string>;
    zrangebylexAsync(key: string, min: string, max: string): Promise<string>;
    zrangebylexAsync(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string>;
    ZRANGEBYLEXAsync(key: string, min: string, max: string): Promise<string>;
    ZRANGEBYLEXAsync(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string>;
    zrevrangebylexAsync(key: string, min: string, max: string): Promise<string>;
    zrevrangebylexAsync(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string>;
    ZREVRANGEBYLEXAsync(key: string, min: string, max: string): Promise<string>;
    ZREVRANGEBYLEXAsync(key: string, min: string, max: string, limit: string, offset: number, count: number): Promise<string>;
    zrangebyscoreAsync(key: string, min: number | string, max: number | string, withscores: string): Promise<string>;
    zrangebyscoreAsync(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Promise<string>;
    zrangebyscoreAsync(
        key: string,
        min: number | string,
        max: number | string,
        withscores: string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string>;
    ZRANGEBYSCOREAsync(key: string, min: number | string, max: number | string, withscores: string): Promise<string>;
    ZRANGEBYSCOREAsync(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Promise<string>;
    ZRANGEBYSCOREAsync(
        key: string,
        min: number | string,
        max: number | string,
        withscores: string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string>;
    zrankAsync(key: string, member: string): Promise<string>;
    ZRANKAsync(key: string, member: string): Promise<string>;
    zremrangebylexAsync(key: string, min: string, max: string): Promise<number>;
    ZREMRANGEBYLEXAsync(key: string, min: string, max: string): Promise<number>;
    zremrangebyrankAsync(key: string, start: number, stop: number): Promise<number>;
    ZREMRANGEBYRANKAsync(key: string, start: number, stop: number): Promise<number>;
    zremrangebyscoreAsync(key: string, min: string | number, max: string | number): Promise<number>;
    ZREMRANGEBYSCOREAsync(key: string, min: string | number, max: string | number): Promise<number>;
    zrevrangeAsync(key: string, start: number, stop: number, withscores: string): Promise<string>;
    ZREVRANGEAsync(key: string, start: number, stop: number, withscores: string): Promise<string>;
    zrevrangebyscoreAsync(key: string, min: number | string, max: number | string, withscores: string): Promise<string>;
    zrevrangebyscoreAsync(key: string, min: number | string, max: number | string, limit: string, offset: number, count: number): Promise<string>;
    zrevrangebyscoreAsync(
        key: string,
        min: number | string,
        max: number | string,
        withscores: string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string>;
    ZREVRANGEBYSCOREAsync(
        key: string,
        min: number | string,
        max: number | string,
        withscores: string,
        limit: string,
        offset: number,
        count: number,
    ): Promise<string>;
    zrevrankAsync(key: string, member: string): Promise<string>;
    ZREVRANKAsync(key: string, member: string): Promise<string>;
    zscoreAsync(key: string, member: string): Promise<string>;
    ZSCOREAsync(key: string, member: string): Promise<string>;

    clientAsync: OverloadedCommandAsync<string, any>;
    CLIENTAsync: OverloadedCommandAsync<string, any>;
    clusterAsync: OverloadedCommandAsync<string, any>;
    CLUSTERAsync: OverloadedCommandAsync<string, any>;
    configAsync: OverloadedCommandAsync<string, boolean>;
    CONFIGAsync: OverloadedCommandAsync<string, boolean>;
    debugAsync: OverloadedCommandAsync<string, boolean>;
    DEBUGAsync: OverloadedCommandAsync<string, boolean>;
    delAsync: OverloadedCommandAsync<string, number>;
    DELAsync: OverloadedCommandAsync<string, number>;
    evalAsync: OverloadedCommandAsync<string | number, any>;
    EVALAsync: OverloadedCommandAsync<string | number, any>;
    evalshaAsync: OverloadedCommandAsync<string | number, any>;
    EVALSHAAsync: OverloadedCommandAsync<string | number, any>;
    existsAsync: OverloadedCommandAsync<string, number>;
    EXISTSAsync: OverloadedCommandAsync<string, number>;
    mgetAsync: OverloadedCommandAsync<string, string[]>;
    MGETAsync: OverloadedCommandAsync<string, string[]>;
    migrateAsync: OverloadedCommandAsync<string, boolean>;
    MIGRATEAsync: OverloadedCommandAsync<string, boolean>;
    msetAsync: OverloadedCommandAsync<string, boolean>;
    MSETAsync: OverloadedCommandAsync<string, boolean>;
    msetnxAsync: OverloadedCommandAsync<string, boolean>;
    MSETNXAsync: OverloadedCommandAsync<string, boolean>;
    objectAsync: OverloadedCommandAsync<string, any>;
    OBJECTAsync: OverloadedCommandAsync<string, any>;
    pfcountAsync: OverloadedCommandAsync<string, number>;
    PFCOUNTAsync: OverloadedCommandAsync<string, number>;
    pfmergeAsync: OverloadedCommandAsync<string, boolean>;
    PFMERGEAsync: OverloadedCommandAsync<string, boolean>;
    pubsubAsync: OverloadedCommandAsync<string, number>;
    PUBSUBAsync: OverloadedCommandAsync<string, number>;
    scriptAsync: OverloadedCommandAsync<string, any>;
    SCRIPTAsync: OverloadedCommandAsync<string, any>;
    sdiffAsync: OverloadedCommandAsync<string, string[]>;
    SDIFFAsync: OverloadedCommandAsync<string, string[]>;
    shutdownAsync: OverloadedCommandAsync<string, string>;
    SHUTDOWNAsync: OverloadedCommandAsync<string, string>;
    sinterstoreAsync: OverloadedCommandAsync<string, number>;
    SINTERSTOREAsync: OverloadedCommandAsync<string, number>;
    slowlogAsync: OverloadedCommandAsync<string, Array<[number, number, number, string[]]>>;
    SLOWLOGAsync: OverloadedCommandAsync<string, Array<[number, number, number, string[]]>>;
    sortAsync: OverloadedCommandAsync<string, string[]>;
    SORTAsync: OverloadedCommandAsync<string, string[]>;
    sunionAsync: OverloadedCommandAsync<string, string[]>;
    SUNIONAsync: OverloadedCommandAsync<string, string[]>;
    sunionstoreAsync: OverloadedCommandAsync<string, number>;
    SUNIONSTOREAsync: OverloadedCommandAsync<string, number>;
    watchAsync: OverloadedCommandAsync<string, 'OK'>;
    WATCHAsync: OverloadedCommandAsync<string, 'OK'>;
    zinterstoreAsync: OverloadedCommandAsync<string | number, number>;
    ZINTERSTOREAsync: OverloadedCommandAsync<string | number, number>;
    zunionstoreAsync: OverloadedCommandAsync<string | number, number>;
    ZUNIONSTOREAsync: OverloadedCommandAsync<string | number, number>;
    scanAsync: OverloadedCommandAsync<string, [string, string[]]>;
    SCANAsync: OverloadedCommandAsync<string, [string, string[]]>;

    bitfieldAsync: OverloadedKeyCommandAsync<string | number, [number, number]>;
    BITFIELDAsync: OverloadedKeyCommandAsync<string | number, [number, number]>;
    geoaddAsync: OverloadedKeyCommandAsync<string | number, number>;
    GEOADDAsync: OverloadedKeyCommandAsync<string | number, number>;
    geohashAsync: OverloadedKeyCommandAsync<string, string>;
    GEOHASHAsync: OverloadedKeyCommandAsync<string, string>;
    geoposAsync: OverloadedKeyCommandAsync<string, Array<[number, number]>>;
    GEOPOSAsync: OverloadedKeyCommandAsync<string, Array<[number, number]>>;
    geodistAsync: OverloadedKeyCommandAsync<string, string>;
    GEODISTAsync: OverloadedKeyCommandAsync<string, string>;
    georadiusAsync: OverloadedKeyCommandAsync<string | number, Array<string | [string, string | [string, string]]>>;
    GEORADIUSAsync: OverloadedKeyCommandAsync<string | number, Array<string | [string, string | [string, string]]>>;
    georadiusbymemberAsync: OverloadedKeyCommandAsync<string | number, Array<string | [string, string | [string, string]]>>;
    GEORADIUSBYMEMBERAsync: OverloadedKeyCommandAsync<string | number, Array<string | [string, string | [string, string]]>>;
    hdelAsync: OverloadedKeyCommandAsync<string, number>;
    HDELAsync: OverloadedKeyCommandAsync<string, number>;
    hmgetAsync: OverloadedKeyCommandAsync<string, string[]>;
    HMGETAsync: OverloadedKeyCommandAsync<string, string[]>;
    lpushAsync: OverloadedKeyCommandAsync<string, number>;
    LPUSHAsync: OverloadedKeyCommandAsync<string, number>;
    pfaddAsync: OverloadedKeyCommandAsync<string, number>;
    PFADDAsync: OverloadedKeyCommandAsync<string, number>;
    rpushAsync: OverloadedKeyCommandAsync<string, number>;
    RPUSHAsync: OverloadedKeyCommandAsync<string, number>;
    saddAsync: OverloadedKeyCommandAsync<string, number>;
    SADDAsync: OverloadedKeyCommandAsync<string, number>;
    sdiffstoreAsync: OverloadedKeyCommandAsync<string, number>;
    SDIFFSTOREAsync: OverloadedKeyCommandAsync<string, number>;
    sinterAsync: OverloadedKeyCommandAsync<string, string[]>;
    SINTERAsync: OverloadedKeyCommandAsync<string, string[]>;
    sremAsync: OverloadedKeyCommandAsync<string, number>;
    SREMAsync: OverloadedKeyCommandAsync<string, number>;
    zaddAsync: OverloadedKeyCommandAsync<string | number, number>;
    ZADDAsync: OverloadedKeyCommandAsync<string | number, number>;
    zremAsync: OverloadedKeyCommandAsync<string, number>;
    ZREMAsync: OverloadedKeyCommandAsync<string, number>;
    sscanAsync: OverloadedKeyCommandAsync<string, [string, string[]]>;
    SSCANAsync: OverloadedKeyCommandAsync<string, [string, string[]]>;
    hscanAsync: OverloadedKeyCommandAsync<string, [string, string[]]>;
    HSCANAsync: OverloadedKeyCommandAsync<string, [string, string[]]>;
    zscanAsync: OverloadedKeyCommandAsync<string, [string, string[]]>;
    ZSCANAsync: OverloadedKeyCommandAsync<string, [string, string[]]>;

    subscribeAsync: OverloadedListCommandAsync<string, string>;
    SUBSCRIBEAsync: OverloadedListCommandAsync<string, string>;
    unsubscribeAsync: OverloadedListCommandAsync<string, string>;
    UNSUBSCRIBEAsync: OverloadedListCommandAsync<string, string>;
    psubscribeAsync: OverloadedListCommandAsync<string, string>;
    PSUBSCRIBEAsync: OverloadedListCommandAsync<string, string>;
    punsubscribeAsync: OverloadedListCommandAsync<string, string>;
    PUNSUBSCRIBEAsync: OverloadedListCommandAsync<string, string>;

    hmsetAsync: OverloadedSetCommandAsync<string | number, 'OK'>;
    HMSETAsync: OverloadedSetCommandAsync<string | number, 'OK'>;

    blpopAsync: OverloadedLastCommandAsync<string, number, [string, string]>;
    BLPOPAsync: OverloadedLastCommandAsync<string, number, [string, string]>;
    brpopAsync: OverloadedLastCommandAsync<string, number, [string, string]>;
    BRPOPAsync: OverloadedLastCommandAsync<string, number, [string, string]>;
}

export interface OverloadedCommandAsync<T, U> {
    (arg1: T, arg2: T, arg3: T, arg4: T, arg5?: T, arg6?: T): Promise<U>;
    (arg1: T, arg2: T | T[]): Promise<U>;
    (arg1: T | T[]): Promise<U>;
    (...args: T[]): Promise<U>;
}

export interface OverloadedKeyCommandAsync<T, U> {
    (key: string, arg1: T, arg2?: T, arg3?: T, arg4?: T, arg5?: T, arg6?: T): U;
    (key: string, arg1: T | T[]): U;
    (key: string, ...args: T[]): U;
    (...args: Array<string | T>): U;
}

export interface OverloadedListCommandAsync<T, U> {
    (arg1: T, arg2: T, arg3?: T, arg4?: T, arg5?: T, arg6?: T): U;
    (arg1: T | T[]): U;
    (...args: T[]): U;
}

export interface OverloadedSetCommandAsync<T, U> {
    (key: string, arg1: T, arg2?: T, arg3?: T, arg4?: T, arg5?: T, arg6?: T): U;
    (key: string, arg1: T | { [key: string]: T } | T[]): U;
    (key: string, ...args: T[]): U;
    (args: [string, ...T[]]): U;
}

export interface OverloadedLastCommandAsync<T1, T2, U> {
    (arg1: T1, arg2: T1, arg3?: T1, arg4?: T1, arg5?: T1, arg6?: T2): U;
    (args: Array<T1 | T2>): U;
    (...args: Array<T1 | T2>): U;
}

const getKeyWithFallback = (client: RedisClientAsync) => async (
    key: string,
    fallback: () => Promise<any>,
    ttlInSecs?: number,
): Promise<{ data: any; fromCache: boolean }> => {
    let data = await client.getAsync(key);
    if (!data) {
        data = await fallback();
        if (ttlInSecs) {
            await client.setAsync(key, data, 'EX', ttlInSecs);
        }
        await client.setAsync(key, data);
        return { data, fromCache: false };
    }
    return { data, fromCache: true };
};

export function createClient(port: number, host?: string, options?: ClientOpts): RedisClientAsync {
    const client = redis.createClient(port, host, options) as RedisClientAsync;
    bluebird.promisifyAll(client);
    client.getKeyWithFallback = getKeyWithFallback(client);
    return client;
}
