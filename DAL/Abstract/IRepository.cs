using Microsoft.EntityFrameworkCore.Query;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace DAL.Abstract
{
    public interface IRepository<T> where T : class
    {
        T Single(Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null);

        void Insert(T item);

        void Update(T item);

        void Delete(Expression<Func<T, bool>> predicate = null);

        T[] GetList(Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null);

        IPaginate<T> GetPaginatedList(Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null,
            int index = 0,
            int size = 20);

        IPaginate<TResult> GetPaginatedList<TResult>(Expression<Func<T, TResult>> selector,
            Expression<Func<T, bool>> predicate = null,
            Func<IQueryable<T>, IOrderedQueryable<T>> orderBy = null,
            Func<IQueryable<T>, IIncludableQueryable<T, object>> include = null,
            int index = 0,
            int size = 20) where TResult : class;
    }
}
