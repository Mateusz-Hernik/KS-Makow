﻿namespace DAL.Abstract
{
    public interface IRepositoryFactory
    {
        IRepository<T> GetRepository<T>() where T : class;
        IRepositoryAsync<T> GetRepositoryAsync<T>() where T : class;
    }
}
